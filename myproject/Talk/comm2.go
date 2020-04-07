package Talk

import (
	"encoding/json"
	"log"
	"myproject/Mysql"
	"net/http"
)

type List2 struct {
	Id int
	Data string
}

var list2 [5]List2

func Testtwo()  {
	db := Mysql.GetDB()
	rows, err := db.Query("select * from moviedetail")
	if err != nil{
		log.Fatal("查询表单失败", err)
	}
	//fmt.Println(rows)
	for rows.Next(){
		var a int
		var b string
		err = rows.Scan(&a, &b)
		list2[a - 1] = List2{a, b}
		if err != nil{
			log.Fatal("查询数据失败", err)
		}
	}
	//fmt.Println(lists)
	//json.NewEncoder(w).Encode(lists)
}

func Test1(w http.ResponseWriter, r *http.Request)  {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	json.NewEncoder(w).Encode(list2[0])
}

func Test2(w http.ResponseWriter, r *http.Request)  {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	json.NewEncoder(w).Encode(list2[1])
}

func Test3(w http.ResponseWriter, r *http.Request)  {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	json.NewEncoder(w).Encode(list2[2])
}

func Test4(w http.ResponseWriter, r *http.Request)  {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	json.NewEncoder(w).Encode(list2[3])
}

func Test5(w http.ResponseWriter, r *http.Request)  {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	json.NewEncoder(w).Encode(list2[4])
}
