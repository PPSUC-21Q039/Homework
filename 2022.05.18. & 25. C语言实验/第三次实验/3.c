/**
* @File_Name: 3.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: 2022年05月28日 星期六 08时18分52秒
* @Description: 
**/

#include<stdio.h>
#include<math.h>
#define MAX 100

void dec_2_hex()
{
 	char base[40]="0123456789ABCDEF";
 	char result[MAX] = {'\0'};
	int n;
	int count;

	scanf("%d",&n);

	if(n == 0)
    {
		printf("0");
    }
	while(n != 0)
	{
		result[++count] = base[n % 16]; //这里cnt从1开始
		n = n/16;
	 }

	for(int i = count; i > 0; i--)
		printf("%c", result[i]);
    return;
}

void hex_2_dec()
{
    char a[MAX]; //输入16进制数
	int b[MAX] = { 0 }; //将输入的16进制转为int型
	int i = 0, j = 0;
	int sum = 0;
	int c = 0;//最终10进制数
 
	gets(a);
	//printf("%s\n", a); //输出初始
 
	//将其从char型强转为int型 存入 b[]中
	while (a[sum] != '\0'){ 
	if ((a[sum] >= 'a') && (a[sum] <= 'z'))
		{
			b[sum] = a[sum] - 'a' + 10;
			sum++;
			continue;
		}
		if ((a[sum] >= 'A') && (a[sum] <= 'Z'))
		{
			b[sum] = a[sum] - 'A' + 10;
			sum++;
			continue;
		}
		b[sum] = a[sum] - '0';
		sum++;
	}
 	
	//将每转为16进制
	for (i = 0; i < sum; i++)
	{
		b[sum - i - 1] = b[sum - i - 1] * pow(16, i);
	}
	
	//累加得出结果
	for (j = 0; j < sum; j++)
	{
		c = c + b[j];
	}
	printf("%d", c);
 
	return;
}

int main()
{
    int mode;
    scanf("%d", &mode);

    if (mode == 0)
    {
        dec_2_hex();
    }
    else if (mode == 1)
    {
        hex_2_dec();
    }
    else
    {
        printf("Error: Mode invalid!\n");
        return -1;
    }
 	return 0;
}
