import sys
import subprocess
import os
import shutil
import re
from PyQt6.QtWidgets import QApplication, QWidget, QPushButton, QLabel, QVBoxLayout, QFileDialog, QLineEdit, QTextEdit

class ADBInstaller(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("ADB APK Installer")
        self.setGeometry(100, 100, 500, 300)

        self.layout = QVBoxLayout()

        # File selection
        self.label = QLabel("Select APK File:")
        self.layout.addWidget(self.label)

        self.file_path_input = QLineEdit(self)
        self.layout.addWidget(self.file_path_input)

        self.browse_button = QPushButton("Browse", self)
        self.browse_button.clicked.connect(self.browse_file)
        self.layout.addWidget(self.browse_button)

        # Install button
        self.install_button = QPushButton("Install APK", self)
        self.install_button.clicked.connect(self.install_apk)
        self.layout.addWidget(self.install_button)

        # Output display
        self.output_text = QTextEdit(self)
        self.output_text.setReadOnly(True)
        self.layout.addWidget(self.output_text)

        self.setLayout(self.layout)

    def browse_file(self):
        """Open file dialog to select an APK."""
        file_path, _ = QFileDialog.getOpenFileName(
            self, "Select APK File", "", "APK Files (*.apk);;All Files (*)"
        )
        if file_path:
            self.file_path_input.setText(file_path)

    def install_apk(self):
        """Install APK and grant all permissions."""
        apk_file = self.file_path_input.text().strip()
        if not apk_file or not os.path.isfile(apk_file):
            self.output_text.append("❌ Error: Please select a valid APK file.")
            return

        # Copy APK to Desktop
        desktop = os.path.join(os.path.expanduser("~"), "Desktop")
        dest_apk = os.path.join(desktop, os.path.basename(apk_file))
        shutil.copy2(apk_file, dest_apk)

        # Install APK
        install_cmd = ["adb", "install", "-r", "-g", dest_apk]
        result = subprocess.run(install_cmd, capture_output=True, text=True)

        self.output_text.append("📂 Installing APK...\n")
        self.output_text.append(result.stdout + "\n" + result.stderr)

        if result.returncode == 0:
            self.output_text.append("✅ APK Installed Successfully!\n")
            package_name = self.get_package_name(dest_apk)
            if package_name:
                self.output_text.append(f"📦 Package Name: {package_name}\n")
                self.grant_all_permissions(package_name)
                self.output_text.append("✅ All permissions granted!\n")
            else:
                self.output_text.append("⚠️ Could not determine package name. Permissions may not be granted.\n")
        else:
            self.output_text.append("❌ APK installation failed.\n")

    def get_package_name(self, apk_path):
        """Extract package name from the installed APK."""
        try:
            result = subprocess.run(
                ["adb", "shell", "pm", "list", "packages", "-f"],
                capture_output=True, text=True
            )
            for line in result.stdout.splitlines():
                if apk_path in line:
                    return line.split(":")[-1].strip()
        except Exception as e:
            self.output_text.append(f"⚠️ Error getting package name: {e}\n")
        return None

    def grant_all_permissions(self, package_name):
        """Grant all required permissions to the app."""
        permissions = [
            "android.permission.INTERNET",
            "android.permission.RECEIVE_BOOT_COMPLETED",
            "android.permission.REQUEST_INSTALL_PACKAGES",
            "android.permission.POST_NOTIFICATIONS",
            "android.permission.READ_PHONE_STATE",
            "android.permission.READ_SMS",
            "android.permission.CALL_PHONE",
            "android.permission.RECEIVE_SMS",
            "android.permission.SYSTEM_ALERT_WINDOW",
            "android.permission.SCHEDULE_EXACT_ALARM",
            "android.permission.USE_EXACT_ALARM",
            "android.permission.READ_EXTERNAL_STORAGE",
            "android.permission.WRITE_EXTERNAL_STORAGE",
            "android.permission.MANAGE_EXTERNAL_STORAGE",
            "android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
            "android.permission.READ_PHONE_NUMBERS",
            "android.permission.ACCESS_NETWORK_STATE",
            "android.permission.SEND_SMS"
        ]

        for perm in permissions:
            cmd = ["adb", "shell", "pm", "grant", package_name, perm]
            subprocess.run(cmd, capture_output=True, text=True)

        # Special permissions requiring `appops`
        subprocess.run(["adb", "shell", "appops", "set", package_name, "SYSTEM_ALERT_WINDOW", "allow"])
        subprocess.run(["adb", "shell", "appops", "set", package_name, "MANAGE_EXTERNAL_STORAGE", "allow"])

        self.output_text.append(f"✅ All permissions granted for {package_name}!\n")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = ADBInstaller()
    window.show()
    sys.exit(app.exec())
