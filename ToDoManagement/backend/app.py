import pymysql.cursors
from flask import Flask, render_template,request, redirect
import pymysql

app = Flask(__name__)

def get_connection():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='root',
        db='todos_62',
        cursorclass=pymysql.cursors.DictCursor
    )

@app.route('/')
def index():
    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute("select * from tasks;")
    todos = cursor.fetchall()
    connection.close()
    return render_template('taskPage.html', todos=todos)

@app.route('/addTask', methods=['POST'])
def addNewTask():
    taskName = request.form.get('taskName')
    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute("insert into tasks (task_name) values (%s);", (taskName,))
    connection.commit()
    connection.close()

    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
