from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/productos')
def productos():
    return render_template('productos.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/pago')
def pago():
    return render_template('pago.html')

@app.route('/categorias')
def categorias():
    return render_template('categorias.html')

if __name__ == '__main__':
    app.run(debug=True)
