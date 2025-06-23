module top (
    input x, y, z, 
    output f
);
    // Expansão de Shannon em relação a x:
    // f(x,y,z) = x'·f(0,y,z) + x·f(1,y,z)
    
    // f(0,y,z) = Σm(1,4,5,7) quando x=0 → Σm(1) = y'z
    // f(1,y,z) = Σm(1,4,5,7) quando x=1 → Σm(4,5,7) = yz' + yz = y
    
    assign f = (~x & (~y & z)) | (x & y);
    
    /* Alternativamente, pode ser simplificado para:
    assign f = (~x & ~y & z) | (x & y);
    */
endmodule