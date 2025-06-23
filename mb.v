module top (input mtpx, input mtpy, output mtpz);
    // use os fios a seguir de acordo com a figura
    wire a1, b1, a2, b2, a1b1, a2b2;
    // Implemente a primeira parte do circuito usando os módulos ma e mb
    // Preste atenção nas portas desconectadas 

// Primeira parte do circuito usando módulos ma e mb
    // Assumindo que ma e mb são módulos com portas lógicas básicas
    ma ma_inst1(
        .a(mtpx),       // Entrada a conectada a mtpx
        .b(mtpy),       // Entrada b conectada a mtpy
        .y1(a1),        // Saída y1 conectada a a1
        .y2(b1)         // Saída y2 conectada a b1
    );
    
    mb mb_inst1(
        .a(mtpx),       // Entrada a conectada a mtpx
        .b(mtpy),       // Entrada b conectada a mtpy
        .y1(a2),        // Saída y1 conectada a a2
        .y2(b2)        // Saída y2 conectada a b2
    );

    // Implemente a segunda parte do circuito usando primitivas da linguagem
    
// Segunda parte do circuito usando primitivas Verilog
    and and1(a1b1, a1, b1);  // Porta AND para a1 e b1
    and and2(a2b2, a2, b2);  // Porta AND para a2 e b2
    or  or1(mtpz, a1b1, a2b2); // Porta OR final que gera a saída

endmodule
