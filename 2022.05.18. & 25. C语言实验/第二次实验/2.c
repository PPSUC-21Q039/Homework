/**
* @File_Name: 2.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com 
* @Created_Time: Wed May 25 08:51:05 2022
* @Description: 给定行数，输出杨辉三角形
**/

#include<stdio.h>

int main()
{
    int num = 0;
    int a[100][100] = {0};
    int i = 0, j = 0;

    scanf("%d",&num);

    for (i = 0; i < num; i++) // 使第一列为 1 
    {
        a[i][0] = 1;
    }

    for (i = 1; i < num; i++)
    {
        for (j = 1; j <= i; j++)
        {
            a[i][j] = a[i-1][j] + a[i-1][j-1];
        }
    }

    for (i = 0; i < num; i++) //输出杨辉三角形
    {
        for (j = 0; j <= i; j++)
            printf("%d ", a[i][j]);
        printf("\n");
    }
    return 0;
}

