#!/bin/bash
startTime=0 #开始时间
endTime=0 #结束时间
length=404 #视频长度
i=0
while [ $endTime -le $length ]; do
    #statements
    i=$[$i+1]
    endTime=$[$startTime+60] #分段间隔时间
    ffmpeg -i ./222_c.mp4 -ss $startTime -to $endTime -acodec copy -vcodec copy 222_$i.mp4
    startTime=$[endTime]
 
 
done
 
