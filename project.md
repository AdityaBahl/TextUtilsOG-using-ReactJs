# Compiler Design Lab

### (23 January - 8 February)

## By - Aditya Bahl

## Sec - B

## Roll Number - 25

## University Roll Number - 2016580

### Aim

Given a String Expression, count number of words in it.

### Code

```
%{
#include<stdio.h>
int spaceCnt = 0, others = 0;
%}
%%
[' '] {spaceCnt++;}
"\n" {printf("%d\n", spaceCnt+(int)(others > 0)); spaceCnt = 0; others = 0;}
. {others++;}
%%
int yywrap(void){}
int main(){
    yylex();
    return 0;
}
```

### Output

output1

### Aim

### Code

### Output

### Aim

### Code

### Output

### Aim

### Code

### Output

### Aim

### Code

### Output
