from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', userName='Rosie', email='rosie@gmail.com', mobNumber='3453455556')

@app.route('/submit', methods=['POST'])
def submit():
    email_id = request.form.get('EmailID')
    mobNumber = request.form.get('MobileNUMBER')
    message = request.form.get('messageCONTENT')
    print(email_id)
    return render_template('submitForm.html', userName='Rosie', email_id=email_id,mobNumber=mobNumber,message=message)

if __name__ == '__main__':
    app.run(debug=True)



# http//:localhost:5000/ 
# http//:127.0.0.1:5000