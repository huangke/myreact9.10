import Mock from "mockjs"

Mock.mock("/list","get",{
    "list|10":[
        {
            "id|+1":0,
            "title":"@ctitle",
            "views|255-1550":0,
            "color|+1":["#f90","#12f","#823","#00f","#f0f","#ff1","#f00","#fcc","#0f9","#9f0"]
        }
    ]
})