from flask import Flask, render_template, url_for
import os
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def index():
    ruta = os.path.join(app.static_folder, 'image')

    # Productos
    productos = [
        url_for('static', filename=f'image/{img}')
        for img in os.listdir(ruta)
        if img.lower().endswith(('.jpg', '.jpeg', '.png'))
    ]

    return render_template("index.html", productos=productos, year=datetime.now().year)

@app.route("/carrito")
def carrito():
    return render_template("carrito.html", year=datetime.now().year)

@app.route("/login")
def login():
    return render_template("login.html", year=datetime.now().year)

@app.route("/pagos")
def pagos():
    return render_template("pagos.html", year=datetime.now().year)

if __name__ == "__main__":
    app.run(debug=True)
