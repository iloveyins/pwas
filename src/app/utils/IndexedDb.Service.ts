/**
 * name:http服务
 * describe:对http请求做统一处理
 */
import { Injectable, OnInit } from '@angular/core'
import { HttpHandler } from '@angular/common/http';


export  class IndexedDbService   {
    constructor(){};
    result: any;
   /**
    * 打开数据库
    * @param name 数据库名称
    * @param version  版本号
    */
    public openDB(name, version,myDB) {
        var version = version || 1;
        var request = indexedDB.open(name, version);
        request.onerror = function (e) {
            console.log("openDB error!");
        };
        request.onsuccess = (e)=> {
            debugger;
            //个人感觉可能把DB对象return出去比较好，这样写复用性应该不太好，不过是测试嘛，就简单写咯
            // myDB.db = (<Targerinerface>e.target).result;
        };
        request.onupgradeneeded = (e)=> {
            // var db = e.target.result;
            // if (!db.objectStoreNames.contains('students')) {
            //     db.createObjectStore('students', {
            //         keyPath: 'id'
            //     });
            // }
            console.log("indexDB version change to " + version);
        }
    }

    /**
     * 
     * @param db 
     * @param storeName 
     * @param value 
     */
    public getDataByKey(db, storeName, value) {
        var transaction = db.transaction(storeName, 'readwrite');
        var store = transaction.objectStore(storeName);
        var request = store.get(value);
        request.onsuccess = function (e) {
            var student = e.target.result;
            console.log(student);
        }
    }

    //更新数据，通过调用store的put方法来更新数据。会自动替换键值相同的记录，达到更新目的，没有相同的则添加
    /**
     * 
     * @param db 
     * @param storeName 
     * @param student1 
     */
    updateDataByKey(db, storeName, student1) {
        var transaction = db.transaction(storeName, 'readwrite');
        var store = transaction.objectStore(storeName);
        var request = store.get(student1.id);
        request.onsuccess = function (e) {
            //var student=e.target.result;
            store.put(student1);
        };
    }

    /**
     * 
     * @param db 
     * @param storeName 
     */
    addData(db, storeName,students) {
        var transaction = db.transaction(storeName, 'readwrite');
        var store = transaction.objectStore(storeName);
        for (let i = 0; i < students.length; i++) {
            store.add(students[i]);
        }
    }

}
