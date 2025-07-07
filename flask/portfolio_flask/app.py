from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', userName='Rosie', email='rosie@gmail.com', mobNumber='3453455556')



if __name__ == '__main__':
    app.run(debug=True)



# http//:localhost:5000/ 
# http//:127.0.0.1:5000