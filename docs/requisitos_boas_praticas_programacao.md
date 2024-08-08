# Boas Práticas de Programação

Este documento descreve cinco boas práticas de programação que podem ajudar a melhorar a qualidade e a manutenção do código Javascript.

## 1. Nomenclatura Significativa e codigo em inglês

Use nomes de variáveis e funções que descrevam claramente sua finalidade e seu uso no contexto do código. Nomes significativos tornam o código mais legível e compreensível para outros desenvolvedores. Por padrão todo o código deve estar em inglês

Exemplo:
```javascript
function calculate_average(list_of_numbers) {
	let sum = 0;
	list_of_numbers.forEach(num => sum += num);
	return sum / list_of_numbers.length;
}
```

## 2. Comentários Concisos

Utilize comentários para somente para explicar partes complexas do código, algoritmos não triviais, decisões de design e quaisquer outras informações relevantes. Mantenha o código o mais direto possível para que sem comentários seja possível entendê-lo.

Exemplo de comentário irrelevante:
// ~~The function below calculates the average of a list of numbers.~~
```javascript
function calculate_average(list_of_numbers) {
	let sum = 0;
	list_of_numbers.forEach(num => sum += num);
	return sum / list_of_numbers.length;
}
```

## 3. Gerenciamento Adequado de Exceções

Trate exceções de forma apropriada e consistente em seu código, lidando com erros de forma robusta e fornecendo mensagens de erro significativas para facilitar a depuração.

Exemplo:

```javascript
function division(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return numerator / denominator;
    } catch (error) {
        console.error("An error occurred during division:", error.message);
        return null;
    }
}
```
## 4. Divisão e Modularização do Código

Divida o código em funções ou módulos menores e mais gerenciáveis, cada um responsável por uma única tarefa. Isso promove a reutilização do código, facilita a depuração e melhora a manutenção geral do sistema.

Exemplo:

Ao invés de utilizar o código:
```javascript
function Calculator(num1, num2, operator) {
    switch(operator){
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": {
            if(num2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            
            return num1 / num2;
        }
        default: throw new Error("Operator invalid.");
    }
}
```
Utilize em módulos menores com uma unica responsabilidade: 

```javascript
const Calculator  = {
    sum: function(a, b) {
        return a + b;
    },

    subtraction: function(a, b) {
        return a - b;
    },

	multiplication: function(a, b) {
	return a * b;
    },

	division: function(a, b) {
		if(b === 0) {
			throw new Error("Division by zero is not allowed.");
		}
		return a /b;
    }
};

console.log(Calculadora.soma(5, 3)); // output: 8
console.log(Calculadora.subtracao(10, 2)); // output: 8
```

## 5. Crie teste unitários

Utilize testes para ajudar a garantir que as unidades individuais de código (funções, métodos) funcionem conforme o esperado, detectando e prevenindo regressões e erros de forma rápida e eficiente durante o desenvolvimento.


### Pontos críticos
No Tomatimer temos como pontos críticos a ausência de notificação para o usuário de quando os timers se esgotam, bem como a ausência de sinalização de conclusão das tarefas.

Exemplo:

```javascript
const Calculator = require('./Calculator'); // Importe o módulo Calculator

describe('Calculator', () => {
    it('sum', () => {
        expect(Calculator.sum(1, 2)).toBe(3); 
    });

    it('subtraction', () => {
        expect(Calculator.subtraction(5, 3)).toBe(2); 
    });

    it('multiplication', () => {
        expect(Calculator.multiplication(2, 3)).toBe(6); 
    });

    it('division', () => {
        expect(Calculator.division(6, 2)).toBe(3);
    });

    it('division by zero', () => {
        expect(() => { Calculator.division(6, 0) }).toThrow(); 
    });
});
```

