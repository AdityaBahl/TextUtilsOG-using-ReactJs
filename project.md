# Compiler Design Lab

### (23 January - 8 February)

By - Aditya Bahl<br>
Sec - B<br>
Roll Number - 25<br>
University Roll Number - 2016580<br>

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

Given an expression determine whether it is an odd or an even number.

### Code

```
%{
#include<stdio.h>
int num;
%}
%%
[0-9]+ {
num = atoi(yytext);
if(num%2 == 0){
printf("EVEN\n");
}else{
printf("ODD\n");
}
 }
.* {printf("->Invalid Number\n");}
%%
int yywrap();
int main(){
yylex();
return 0;
}
```

### Output

output3

## Experiment 4

### Aim

Given an expression determine whether it is a PRIME number.

### Code

```
%{
#include<stdio.h>
#include<stdbool.h>
int num, i;
bool chk;
%}
%%
[0-9]+ {
num = atoi(yytext);
if(num == 1){
printf("NOT a PRIME\n");
}else{
i = 2;
chk = true;
while(i*i<=num){
if(num%i == 0){
chk = false;
break;
}
i++;
}
if(chk){
printf("->PRIME\n");
}else{
printf("->NOT a PRIME\n");
}
}
 }
.* {printf("->Invalid Number\n");}
%%
int yywrap(void);
int main(){
yylex();
return 0;
}
```

### Output

output4

## Experiment 5

### Aim

Given a string expression determine number of whitespaces in it.

### Code

### Output

output5
