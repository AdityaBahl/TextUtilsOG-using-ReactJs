# Compiler Design Lab

### (23 January - 8 February)

By - Aditya Bahl
Sec - B
Roll Number - 25
University Roll Number - 2016580

## Experiment 1

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

## Experiment 2

### Aim

Given a string expression determine whether it is a valid C identifier.

### Code

```
%{
#include<stdio.h>
#include<stdbool.h>
%}
%%
[a-zA-Z_][a-zA-Z0-9_]* {printf("VALID");}
[0-9].* {printf("INVALID");}
.* {printf("INVALID");};
%%
int yywrap(void) {}
int main(){
yylex();
return 0;
}

```

### Output

output2

## Experiment 3

### Aim

### Code

### Output

output3

## Experiment 4

### Aim

### Code

### Output

output4

## Experiment 5

### Aim

### Code

### Output

output5
