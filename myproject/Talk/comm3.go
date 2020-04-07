package Talk

import (
	"encoding/json"
	"log"
	"myproject/Mysql"
	"net/http"
)

type List3 struct {
	Id int
	Name string
	Image string
	Content string
}

func Testthree(w http.ResponseWriter, r *http.Request)  {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	db := Mysql.GetDB()
	rows, err := db.Query("select * from moviechara")
	if err != nil{
		log.Fatal("查询表单失败", err)
	}
	//fmt.Println(rows)
	var list3 [14]List3
	for rows.Next(){
		var a int
		var b, c, d string
		err = rows.Scan(&a, &b, &c, &d)
		list3[a - 1] = List3{a, b, c, d}
		if err != nil{
			log.Fatal("查询数据失败", err)
		}
	}
	//fmt.Println(lists)
	json.NewEncoder(w).Encode(list3)
}

