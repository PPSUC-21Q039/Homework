/**
* @File_Name: 1.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: 2022��05��25�� ������ 08ʱ40��57��
* @Description: ��� 200 ���ڵ����� 
**/

#include <stdio.h> 

int main()
{
	int i = 0;
	int j = 0;
    int count = 1;
    int result[50]={0};
    result[0] = 2; 
    
    for (i = 3; i <= 200; i++) // 2��ż��������2ȴ������
   	{
       	if	(i % 2 == 0) //�Ƚ����жϣ������ż����ֱ������
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

