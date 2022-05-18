/**
* @File_Name: 4.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: 2022年05月18日 星期三 09时36分15秒
* @Description: 输出菱形
**/

#include<stdio.h>

int main(int argc, char * argv[])
{

	int row = 0;
    int half;
    
    //row = atoi(argv);
    printf("输入要打印的行数:");
	scanf("%d", &row);
	half = row / 2 + 1;
	for(int i = 1; i <= half; i++)
    {
		for(int j = 1; j <= half -i; j++)
        {
			printf(" ");
		}
		for(int j = 1;j <= 2 * i - 1;j++)
        {
			printf("*");
		}
		printf("\n");
	}

	for(int i = 1;i < half; i++)
    {
		for(int j = 1; j <= i; j++)
        {
			printf(" ");
		}
		for(int j = 1; j <= 2*(half-i-1) + 1; j++)
        {
			printf("*");
		}
		printf("\n");
	}
	return 0;
}
