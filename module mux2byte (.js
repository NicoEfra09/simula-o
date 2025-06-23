module mux2byte (
    input [7:0] a, b, 
    input sel, 
    output [7:0] out);
    assign out = sel ? b : a;

    module mux4x1 (
    input [7:0] a, b, c, d,
    input [1:0] sel,
    output [7:0] out
);
    
    // Fios intermediários
    wire [7:0] out_stage1_0, out_stage1_1;
    
    // Primeiro estágio de multiplexação
    mux2byte mux0 (
        .a(a),          // Entrada a
        .b(b),          // Entrada b
        .sel(sel[0]),    // Bit menos significativo do seletor
        .out(out_stage1_0)
    );
    
    mux2byte mux1 (
        .a(c),          // Entrada c
        .b(d),          // Entrada d
        .sel(sel[0]),    // Bit menos significativo do seletor
        .out(out_stage1_1)
    );
    
    // Segundo estágio de multiplexação
    mux2byte mux_final (
        .a(out_stage1_0), // Saída do primeiro mux do primeiro estágio
        .b(out_stage1_1), // Saída do segundo mux do primeiro estágio
        .sel(sel[1]),     // Bit mais significativo do seletor
        .out(out)
    );
    
endmodule