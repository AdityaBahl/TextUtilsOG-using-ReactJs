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

![Screenshot (111)](https://user-images.githubusercontent.com/90335449/218307386-b3f8834b-fdbc-46a6-9660-911ba4622016.png)

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

![Screenshot (112)](https://user-images.githubusercontent.com/90335449/218307430-ed3b8021-2d51-4b50-89e1-d0a45447800a.png)

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

![Screenshot (115)](https://user-images.githubusercontent.com/90335449/218308141-04a292e0-43ac-4159-ab93-233d0d97e34e.png)

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

![Screenshot (114)](https://user-images.githubusercontent.com/90335449/218308103-60b1978f-ad2e-4b2c-a11e-1dbaab043d50.png)

## Experiment 5

### Aim

Given a string expression determine number of whitespaces in it.

### Code

```
%{
#include<stdio.h>
int space_cnt = 0;
%}
%%
['\n] {printf("->No. of WHITE Spaces = %d\n", space_cnt); space_cnt = 0;}
[ ] space_cnt++;
. ;
%%
int main(){
yylex();
return 0;
}
```

### Output

![Screenshot (113)](https://user-images.githubusercontent.com/90335449/218307936-84ad4972-d43f-467c-aaea-2249fe128496.png)
