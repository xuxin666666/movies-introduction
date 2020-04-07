package Talk

import (
	"encoding/json"
	"log"
	"myproject/Mysql"
	"net/http"
)

type List1 struct {
	Id int
	Head string
	Image string
}

func Testone(w http.ResponseWriter, r *http.Request)  {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	db := Mysql.GetDB()
	rows, err := db.Query("select * from app")
	if err != nil{
		log.Fatal("查询表单失败", err)
	}
	//fmt.Println(rows)
	var list1 [5]List1
	for rows.Next(){
		var a int
		var b, c string
		err = rows.Scan(&a, &b, &c)
		list1[a - 1] = List1{a, b, c}
		if err != nil{
			log.Fatal("查询数据失败", err)
		}
	}
	//fmt.Println(lists)
	json.NewEncoder(w).Encode(list1)
}
