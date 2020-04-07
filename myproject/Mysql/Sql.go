package Mysql

import (
	"database/sql"
	"fmt"
	_"github.com/go-sql-driver/mysql"
	"log"
)

var DB *sql.DB

const (
	USERNAME = "root"
	PASSWORD = "XGY3268154595xgy"
	IP = "localhost"
	PORT = 3306
	DATABASE = "movie"
)

func Init()  {
	conn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8", USERNAME, PASSWORD, IP, PORT, DATABASE)
	db, err := sql.Open("mysql", conn)
	if err != nil{
		log.Fatalln("You have an err in sql-connecting", err)
	}
	DB = db
}

func GetDB() *sql.DB  {
	return DB
}

func Close()  {
	err := DB.Close()
	if err != nil{
		log.Fatalln("You have an err in closing sql", err)
	}
}

