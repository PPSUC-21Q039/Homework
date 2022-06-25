/**
* @File_Name: 1.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: 2022年05月25日 星期三 08时40分57秒
* @Description: 输出 200 以内的素数 
**/

#include <stdio.h> 

int main()
{
	int i = 0;
	int j = 0;
    int count = 1;
    int result[50]={0};
    result[0] = 2; 
    
    for (i = 3; i <= 200; i++) // 2是偶数，但是2却是素数
   	{
       	if	(i % 2 == 0) //先进行判断，如果是偶数，直接跳过
        	continue;
        else
       	{
        	for (j = 2; j < i; j++)
         	{
           		if (i % j == 0)
             		break;
           	}
        	if	(i == j)
        	{
           		result[count] = i;
           		count = count + 1;
           	}
        }
    }
    
    count = 1;
    /*
    for (i = 0; i < 50; i++)
    {
    	if (result[i] != 0)
    	{
    		if (count < 10)
    		{
    			printf("0%d: %d\n", count, result[i]);
    			count = count + 1;
			}
    		else
    		{
    			printf("%d: %d\n", count, result[i]);
    			count = count + 1;
			}
		}
	}
    */
    for (i = 0; i < 50; i++)
    {
        if (result[i] != 0)
        {
            if (i % 7 == 0)
                printf("\n");
            printf("%-4d ", result[i]);
        }
    }
    return 0;
}

