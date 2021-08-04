const generateMemberCards = members => {

    //create manager card 
    const managerCard = mgrInfo => {
        return `
        <div class="col" id="boxone">
                <h3> Manager </h3>
                <svg id="Capa_1" enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m234.471 259.437c6.875 3.683 15.695 5.525 24.518 5.525 8.82 0 17.644-1.842 24.518-5.525 3.651-1.956 5.025-6.501 3.069-10.152s-6.501-5.025-10.152-3.069c-9.452 5.063-25.42 5.062-34.869 0-3.65-1.955-8.196-.582-10.152 3.069-1.957 3.65-.584 8.196 3.068 10.152z"/><path d="m432.318 341.015c-17.864-16.077-41.266-28.255-64.82-33.837-3.318-2.408-20.428-14.841-34.757-25.544 18.248-17.396 32.384-39.32 38.724-61.622 7.179-1.399 14.473-5.328 20.365-11.137 7.182-7.081 11.301-15.97 11.301-24.39v-11.168c0-10.356-8.435-18.781-18.803-18.781h-9.328v-16.906-36.764c0-46.51-37.662-77.638-72.908-91.261-43.353-16.755-87.74-11.224-110.435 13.747-.451.493-.825.916-1.143 1.282-.486.069-1.051.153-1.711.264-22.514 3.716-38.543 19.124-46.355 44.56-5.924 19.287-5.613 39.059-5.497 46.502.011.716.021 1.302.021 1.743v18.283 18.55h-9.327c-10.353 0-18.775 8.425-18.775 18.781v11.168c0 8.427 4.12 17.323 11.304 24.406 5.881 5.799 13.162 9.722 20.331 11.12 6.347 22.32 20.509 44.263 38.785 61.666-3.208 2.482-7.182 5.565-11.273 8.74-8.234 6.389-17.427 13.522-20.952 16.192-24.411 5.282-48.871 17.741-67.386 34.406-22.361 20.126-34.179 44.178-34.179 69.554v24.377c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-24.377c0-43.568 44.302-78.919 88.22-88.979l47.137 35.074c.166.123.335.239.51.348 1.781 1.11 2.945 2.018 3.88 2.749 2.77 2.163 5.122 3.023 7.206 3.023 3.432 0 6.133-2.333 8.767-5.02 1.47-1.499 3.596-3.668 6.94-6.639l4.719 18.521-27.306 91.01c-.016.054-.047.148-.062.203-.303.893-1.226 3.611.556 7.04l15.329 29.053h-85.189v-52.394c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v52.394h-50.459c-.879 0-1.722.015-2.526.029-.831.014-1.843.035-2.656.013-.038-.421-.066-.969-.066-1.67v-26.248c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v26.248c0 3.743.441 9.152 4.253 12.897 3.422 3.361 7.698 3.781 11.719 3.781.681 0 1.356-.012 2.017-.024.719-.013 1.472-.027 2.258-.027h163.07c.007 0 .015.001.022.001.008 0 .016-.001.025-.001h27.136 27.108c.008 0 .016.001.025.001.007 0 .014-.001.022-.001h163.098c.786 0 1.539.014 2.258.027.661.012 1.335.024 2.017.024 4.021 0 8.298-.42 11.719-3.781 3.813-3.744 4.253-9.154 4.253-12.897v-84.754c0-25.379-11.82-49.43-34.182-69.555zm-57.318-144.682v-26.798h9.327c2.062 0 3.803 1.732 3.803 3.782v11.168c0 4.366-2.554 9.491-6.832 13.709-2.021 1.992-4.284 3.651-6.603 4.89.203-2.283.305-4.536.305-6.751zm-244.294 1.877c-4.28-4.22-6.835-9.351-6.835-13.725v-11.168c0-2.05 1.729-3.782 3.775-3.782h9.327v26.798c0 2.213.102 4.465.305 6.746-2.309-1.235-4.562-2.886-6.572-4.869zm220.062 115.342-41.528 30.9c-.841.531-1.583 1.03-2.237 1.49-1.807-1.818-4.326-4.267-8.028-7.471l-8.01-7.191c-.577-.766-1.302-1.424-2.147-1.928l-15.571-13.978c4.237-.99 8.632-2.329 13.304-4.074 12.109-4.513 23.819-11.291 34.551-19.642 9.963 7.474 21.836 16.18 29.666 21.894zm-74.217 24.946-6.068 23.81h-28.994l-5.825-22.86 20.46-19.287zm-85.288-298.804c.887-.149 1.555-.238 2.074-.309 3.844-.519 5.493-1.414 8.017-4.355.337-.393.771-.899 1.387-1.572 10.979-12.08 29.29-18.368 50.187-18.368 13.907 0 28.96 2.786 43.756 8.505 30.609 11.83 63.316 38.342 63.316 77.271v32.921c-24.119-33.86-50.208-31.643-77.561-29.318-20.681 1.756-42.064 3.573-66.842-9.398-11.617-6.08-34.198-11.002-54.91 24.347l-8.715 14.915v-16.631c0-.5-.01-1.165-.023-1.978-.497-31.642 5.917-70.518 39.314-76.03zm138.815 109.144h-54.022c-6.479 0-11.749 5.272-11.749 11.751v6.067c-5.663-.96-11.363-.955-17.067.019v-6.086c0-6.48-5.258-11.751-11.721-11.751h-54.022c-6.463 0-11.721 5.272-11.721 11.751v4.362l-14.582-6.401 18.44-31.558c16.57-28.281 29.966-21.272 35.007-18.633 28.65 14.996 53.311 12.901 75.068 11.054 29.531-2.51 51.265-4.353 73.593 38.869l-15.503 6.724v-4.417c0-6.479-5.258-11.751-11.721-11.751zm-3.279 14.999v12.629.067 12.471h-47.492v-25.166h47.492zm-94.559 0v25.166h-47.464v-12.444c0-.019 0-.038 0-.057v-12.665zm-78.474 47.576c-1.191-5.206-1.794-10.28-1.794-15.08v-22.815l17.804 7.815v10.947c0 6.464 5.258 11.723 11.721 11.723h54.022c6.463 0 11.721-5.259 11.721-11.723v-10.311c5.751-1.386 11.397-1.394 17.067-.022v10.332c0 6.464 5.271 11.723 11.749 11.723h54.022c6.463 0 11.721-5.259 11.721-11.723v-10.923l18.201-7.893v22.87c0 4.8-.604 9.874-1.795 15.085-8.119 35.617-41.175 72.514-76.897 85.829-9.542 3.564-17.584 5.223-25.308 5.223-7.75 0-15.79-1.659-25.312-5.225-35.735-13.319-68.804-50.216-76.922-85.832zm68.549 120.005c-.083.074-.163.151-.243.229l-7.304 6.885c-3.664 3.174-6.163 5.604-7.958 7.41-.654-.46-1.396-.959-2.237-1.49l-41.729-31.05c4.134-3.193 9.296-7.199 14.369-11.135 4.842-3.758 10.077-7.819 13.673-10.595.13.102.262.193.393.291 10.626 8.209 22.198 14.875 34.159 19.333 4.739 1.775 9.196 3.127 13.497 4.125.087.029.174.062.263.082zm229.185 163.905c0 .701-.028 1.249-.066 1.67-.813.02-1.825 0-2.656-.013-.804-.015-1.646-.029-2.526-.029h-56.749v-52.394c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v52.394h-78.928l15.298-28.994c1.263-2.316 1.451-4.656.552-7.208-.009-.031-.018-.063-.028-.094l-9.207-30.67c-1.19-3.967-5.371-6.216-9.339-5.027-3.967 1.191-6.218 5.372-5.027 9.339l8.648 28.809-17.857 33.844h-22.615-22.644l-17.857-33.845 25.742-85.798h29.491l7.546 25.155c.975 3.249 3.955 5.347 7.181 5.347.713 0 1.439-.103 2.158-.318 3.968-1.19 6.219-5.371 5.029-9.338l-8.552-28.509 5.056-19.84c4.229 3.659 6.765 6.245 8.444 7.958 2.635 2.688 5.335 5.02 8.768 5.02 2.083 0 4.436-.86 7.206-3.023.936-.73 2.1-1.639 3.88-2.749.174-.109.344-.225.509-.348l46.698-34.747c43.468 10.48 86.847 45.543 86.847 88.652v84.756z"/></g></svg>
                <li>
                    Name: ${mgrInfo.getName()}
                </li>
                <li>
                    ID: ${mgrInfo.getId()}
                </li>
                <li>
                    Email: ${mgrInfo.getEmail()}
                </li>
                <li>
                    Office Number: ${mgrInfo.getOfficeNumber()}
                </li>
            </div>`;
    }
    //create engineer card 
    //create intern card 

    //Appends all cards here 
    let cardTemplate = []; 

    //filter out manger, engineer or intern  from all team members 

    const filterMgr =  members.filter(member => member.getRole() === "Manager")
    .map(mgrInfo => managerCard(mgrInfo)); 

    console.log(filterMgr);
    //Appends all cards here 
    cardTemplate.push(filterMgr); 

    return cardTemplate.join(""); 

}

module.exports = html =>{
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Info</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>

<body id="body">
    <h1 id="header"> My Team </h1>
    <div class="container">
        <div class="row">
        ${generateMemberCards(html)}

        </div>
        </body>
        
        </html>
        `
}