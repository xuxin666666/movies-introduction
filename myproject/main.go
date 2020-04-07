package main

import (
	"fmt"
	"log"
	"myproject/Mysql"
	"myproject/Talk"
	"net/http"
)

func main()  {
	Mysql.Init()
	defer Mysql.Close()
	http.HandleFunc("/intro", Talk.Testone)
	Talk.Testtwo()
	http.HandleFunc("/chara", Talk.Testthree)
	http.HandleFunc("/content/1", Talk.Test1)
	http.HandleFunc("/content/2", Talk.Test2)
	http.HandleFunc("/content/3", Talk.Test3)
	http.HandleFunc("/content/4", Talk.Test4)
	http.HandleFunc("/content/5", Talk.Test5)

	fmt.Println("Starting server . . . ")
	err := http.ListenAndServe("localhost:8000", nil)
	if err != nil{
		log.Fatal("启动服务失败", err)
	}
}

