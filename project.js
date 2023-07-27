let projectCount = document.querySelector(".project-count");
        let project_wrapper = document.querySelector(".project-wrapper");

        projectCount.innerHTML =
            `
        [ ${project_wrapper.childElementCount} ]
        `
        console.log(project_wrapper.childElementCount)