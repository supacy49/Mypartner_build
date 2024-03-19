# Frontend Web for My Channel.

## Software Required.
1. Node JS 6.9.x (develop on 6.9.5)
2. Yarn (develop on 0.19.1)
2. PM2 2.3.x (develop on 2.3.0)

## Setup Application
### Setup for Development.

1. ติดตั้ง node package ด้วย yarn
    ```shell
        $ yarn install
    ```
2. ติดตั้งไฟล์ Application (AngularJS) ที่ ./public
3. ตั้งค่า proxyMap สำหรับ API Gateway
    ```
    const proxyMap = {
        'cm': 'http://www.callingmelody.net/api'
    }
    ```
4. รันโปรแกรมด้วย node หรือ nodemon
    ```
        $ node server.js
        $ nodemon server.js
    ```

### Setup for Production.
1. ติดตั้ง node package ด้วย yarn
    ```shell
        $ yarn install --production
    ```
2. ติดตั้งไฟล์ Application (AngularJS) ที่ ./public
3. ตั้งค่า proxyMap สำหรับ API Gateway
    ```
    const proxyMap = {
        'cm': 'http://www.callingmelody.net/api'
    }
    ```
4. รันโปรแกรมด้วย pm2
    ```
        $ pm2 start pm2.json
    ```

## การเรียกใช้งาน

1. เรียกใช้งาน API Gateway ด้วย /api/{service}/** เช่น http://localhost:3000/api/greeting/customerProfile
2. เรียกใช้งาน Application AngularJS ด้วย / เช่น http://localhost:3000/ หรือ http://localhost:3000/customer-portal