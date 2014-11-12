
rxvt虽然不支持Ctrl+C和Ctrl+V的复制、粘贴，但是它有自己的一套操作方式。Linux下普遍使用的图形界面均为X11， 而X11支持一种独特的复制粘贴方式，即如果你在另一个程序比如文本编辑器中使用鼠标拖动来高亮一段文字后，不用进行任何操作，此时选中的内容已经复制到 剪贴板中了，随后在rxvt中单击鼠标中键即可将选中内容粘贴到其中，此外，如果鼠标没有中键，可以同时按下左右键以达到同样的效果，还可以使用 Shift+Insert组合键来完成粘贴；反之，从rxvt中向外复制内容同样如此。

------------
== install pinyin input ==
sudo add-apt-repository ppa:fcitx-team/nightly

sudo apt-get install fcitx fcitx-config-gtk fcitx-googlepinyin

