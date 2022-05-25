```c
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


```



```c
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



```

```c
/**
* @File_Name: 3.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: Wed May 25 10:01:55 2022
* @Description: 餐饮评价等级统计
**/

#include <stdio.h>

int main()
{
    int valuation[1000] = {0};
    int count = 0;
    int input;
    int grade_1 = 0, \
        grade_2 = 0, \
        grade_3 = 0, \
        grade_4 = 0, \
        grade_5 = 0;
    
    while(1) {
        scanf ("%d", &input);
        if (input != -1) // 由于是理想输入，故不对输入内容的合法性进行校验
        {
            valuation[count] = input;
            count = count + 1;
        }
        else
        {
            break;
        }
    }

    for (int i = 0; i < count; i++)
    {
        switch (valuation[i])
        {
            case 1: 
                grade_1 ++; break;
            case 2:
                grade_2 ++; break;
            case 3:
                grade_3 ++; break;
            case 4:
                grade_4 ++; break;
            case 5:
                grade_5 ++; break;
        }
    }
    
    printf("n = %d\n", count);
    printf("Grade(*)      Count(n)      Percent(%)\n");
    printf("5             %-5d         %-2.0f\n", grade_5, (float)((float)grade_5 * 100 / (float)count));
    printf("4             %-5d         %-2.0f\n", grade_4, (float)((float)grade_4 * 100 / (float)count));
    printf("3             %-5d         %-2.0f\n", grade_3, (float)((float)grade_3 * 100 / (float)count));
    printf("2             %-5d         %-2.0f\n", grade_2, (float)((float)grade_2 * 100 / (float)count));
    printf("1             %-5d         %-2.0f\n", grade_1, (float)((float)grade_1 * 100 / (float)count));

    return 0;
}

```

```c
/**
* @File_Name: 4.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: 2022年05月25日 星期三 10时56分13秒
* @Description: String Compare
**/

#include <stdio.h>
#include <string.h>

int strcmp_self(char *str_1, char *str_2)
{
    while ((*str_1 != '\0') && (*str_1 == *str_2))
    {
        str_1++;
        str_2++;
    }
    int result = *str_1 - *str_2;
    return result;
}

int main()
{
    char str_1[100], str_2[100];

    char * string_1 = str_1;
    char * string_2 = str_2;

    /* 直接使用 gets() 会引入缓冲区溢出的风险，所以现在换成了 fgets()*/
    fgets(string_1, 100, stdin);
    fgets(string_2, 100, stdin);
    
    printf("%d", strcmp_self(str_1, str_2));
    return 0;
}


```

