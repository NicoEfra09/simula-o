module vector(
  input [3:0] a,
  input [3:0] b,
  output [3:0] a_bitwise_or_b,
  output a_logical_assign a_bitwise_or_b = a & b;
  // a and bit-a-bit com b
  assign a_bitwise_or_b = a & b;
  
  // a and lógico com b
  assign a_logical_or_b = a && b;
  
  // or entre os bits de a
  assign a_reduction_or = |a;
  
  // or entre os bits de b
  assign b_reduction_or = |b;
  
  // a not bit-a-bit concatenado com b not bit-a-bit
  assign not_a_not_b = {~a, ~b};

endmodule
