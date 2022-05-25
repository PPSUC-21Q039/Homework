/**
* @File_Name: 4.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: 2022年05月18日 星期三 09时36分15秒
* @Description: 1000 以内水仙花
**/

#include<stdio.h>
int main()
{
    int num_1, num_2;
    for(int i = 1; i <= 9; i++)
    {
        for(int j = 0; j <= 9; j++)
        {
            for(int k = 0; k <= 9; k++)
            {
                num_1 = i*100 + j*10 + k;
                num_2 = i*i*i + j*j*j + k*k*k;
                if(num_1 == num_2)
                {
                    printf("%3d ", num_1);
                } // if
            } // for k
        } // for j
    } // for i

    printf("\n");
    return 0;
}

