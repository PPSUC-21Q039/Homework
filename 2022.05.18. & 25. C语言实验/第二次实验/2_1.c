/**
* @File_Name: 2_1.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: Wed May 25 09:15:34 2022
* @Description: 
**/

#include <stdio.h>

int main()
{
    int i, j, k;
    int n=0;
    int a[50][50] = {0};

    scanf("%d",&n);

    for (i = 1; i <= n; i++)
        a[i][1] = a[i][i] = 1;  

    for (i = 3; i <= n; i++)
    {
        for (j = 2; j <= i-1; j++)
            a[i][j] = a[i-1][j-1] + a[i-1][j]; /* 除两边的数外都等于上两顶数之和 */ 
    }

    for (i = 1; i <= n; i++)
    {
        for (k = 1; k <= n-i; k++)
        {
            printf("   "); /* 使输出居中 */
        }
        for (j = 1; j <= i; j++)  /* j <= i 是为了不输出其它的数 */
        {
            printf("%6d", a[i][j]);
        }
        
        printf("\n");  /* 当一行输出完以后换行继续下一行的输出 */
    }
    printf("\n");
}


