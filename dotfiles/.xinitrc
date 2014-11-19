#!/bin/sh
gnome-settings-daemon &     # 使用gnome桌面元素
nm-applet --sm-disable &    # 托盘栏添加网卡图标
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODEIFIERS="@im=fcitx"
fcitx &
#exec awesome
