/*************************************************************************
    > File Name: 打印钻石.c
    > Author: 21Q017
    > Mail: 905505155@qq.com 
    > Created Time: 2022年05月18日 星期三 09时29分57秒
 ************************************************************************/

#include<stdio.h>
int main(){
	int row,half,i,j;
	printf("输入要打印的行数:");
	scanf("%d",&row);
	half = row / 2 + 1;
	for(i = 1;i <= half; i++){
		for(j = 1; j <= half -i; j++){
			printf(" ");
		}
		for(j = 1;j <= 2 * i - 1;j++){
			printf("*");
		}
		printf("\n");
	}
	for(i = 1;i < half; i++){
		for(j = 1;j <= i; j++){
			printf(" ");
		}
		for(j = 1;j <= 2*(half-i-1) + 1;j++){
			printf("*");
		}
		printf("\n");
	}
	return 0;
}
