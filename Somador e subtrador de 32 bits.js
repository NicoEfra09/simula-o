module top (
    input  [31:0] a,
    input  [31:0] b,
    input         sub, // 0 = soma, 1 = subtração
    output [31:0] result,
    output        carry_out, // ~empresta se sub
    output        overflow
);

    wire [31:0] b_operand;
    wire [32:0] sum; // Bit extra para o carry
    
    // Seleção da operação: soma ou subtração
    assign b_operand = sub ? ~b : b;
    
    // Realiza a operação: a + b_operand + sub (para complemento de 2 na subtração)
    assign sum = a + b_operand + sub;
    
    // Atribui os resultados
    assign result = sum[31:0];
    assign carry_out = sum[32];
    
    // Detecção de overflow:
    // Ocorre quando os sinais dos operandos são iguais e diferentes do resultado
    assign overflow = (a[31] == b_operand[31]) && (sum[31] != a[31]);
    
endmodule