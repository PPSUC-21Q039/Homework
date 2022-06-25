/**
* @File_Name: 1.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: 2022年05月28日 星期六 07时54分49秒
* @Description: 
**/

#include<stdio.h>
int main()
{
    int s;
    int n; 
    int i, j;
    int count = 0;
     
    scanf("%d", &n);  /* n的值由键盘输入*/
    for(i = 2; i <= n; i++)
    {
        s = 0;
        for(j = 1; j < i; j++)
        {
            if(i % j == 0)
            {
                s += j;
            }
        }
        if(s == i) /* 此时 i 即为所求完数 */
        {
            count = count + 1;
        }
    }

    printf("%d\n", count);
    return 0;
}

