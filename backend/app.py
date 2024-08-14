from flask import Flask, request, jsonify
from sympy import nextprime

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        data = request.get_json()
        num1 = int(data.get('num1'))
        num2 = int(data.get('num2'))
        result = operation(num1, num2)
        return jsonify({'result': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
def operation(num1, num2):
    total_sum = num1 + num2
    max_num = max(num1, num2)
    prime = nextprime(max_num)
    return total_sum + prime

if __name__ == '__main__':
    app.run(debug=True)