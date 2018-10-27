from flask import Flask, render_template, request, json, flash, url_for,redirect
import pymysql.cursors


# Connect to the database
connection = pymysql.connect(host='localhost',
                             user='root',
                             password='rohipra@70',
                             db='rohitsite',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
app = Flask(__name__)
app.config['SECRET_KEY'] = 'developer key'


@app.route('/')
def login():
    return render_template('index.html')
@app.route('/home', methods=['POST', 'GET'])
def home():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        mobile = request.form['mobile']
        budget = request.form['budget']
        subject = request.form['subject']
        message = request.form['message']
        try:

            with connection.cursor() as cursor:
                # Read a single record
                sql = "INSERT INTO rohithsitedetails (name,email,password,mobile,budget,subject,message) VALUES (%s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(sql, (name, email, password, mobile, budget, subject, message))
                connection.commit()

        finally:
            flash("|-> I will contact you soon" )
            return redirect(url_for('login'))


if __name__ == "__main__":
    app.run()
