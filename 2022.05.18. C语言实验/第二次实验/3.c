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
