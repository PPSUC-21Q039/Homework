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

