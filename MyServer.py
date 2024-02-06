from flask import Flask, request, redirect, abort, render_template
import pymysql
import os

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/API')
def API():
    return render_template('API.html')

@app.route('/http_errorcode')
def http_errorcode():
    return render_template('http_errorcode.html')

@app.route('/encryption_encoding')
def encryption_encoding():
    return render_template('encryption_encoding.html')

@app.route('/operation')
def operation():
    return render_template('operation.html')

@app.route('/WebLogin')
def WebLogin():
    return render_template('WebLogin.html')

@app.route('/regular_expression')
def regular_expression():
    return render_template('regular_expression.html')


if __name__ == '__main__':
    app.run(debug=True, host = '0.0.0.0', port=5500)