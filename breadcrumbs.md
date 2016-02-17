The trails like Home >> Label >> Post Name are the breadcrumbs.

So Now lets get Started :

Login to your blogger dashboard
Go to Layouts and then Edit HTML
Then I would Sugguest you download the whole template first then Continue Editing.
Then Tick the Expand widget Template.
Now find for this Code :
<b:include data='top' name='status-message'/>
Now Replace it with the below code :

<b:include data='top' name='status-message'/>
<b:include data='posts' name='breadcrumb'/>
Now Find :
<b:includable id='main' var='top'>
Now Replace the above code with below code :
<b:includable id='breadcrumb' var='posts'>
<b:if cond='data:blog.homepageUrl == data:blog.url'>
<!-- No breadcrumb on home page -->
<b:else/>
<b:if cond='data:blog.pageType == "item"'>
<!-- breadcrumb for the post page -->
<p class='breadcrumbs'>
<span class='post-labels'>
<a expr:href='data:blog.homepageUrl' rel='tag'>Home</a>
<b:loop values='data:posts' var='post'>
<b:if cond='data:post.labels'>
<b:loop values='data:post.labels' var='label'>
<b:if cond='data:label.isLast == "true"'> »
<a expr:href='data:label.url' rel='tag'><data:label.name/></a>
</b:if>
</b:loop>
<b:else/>
»Unlabelled
</b:if>
» <span><data:post.title/></span>
</b:loop>
</span>
</p>
<b:else/>
<b:if cond='data:blog.pageType == "archive"'>
<!-- breadcrumb for the label archive page and search pages.. -->
<p class='breadcrumbs'>
<span class='post-labels'>
<a expr:href='data:blog.homepageUrl'>Home</a> » Archives for <data:blog.pageName/>
</span>
</p>
<b:else/>
<b:if cond='data:blog.pageType == "index"'>
<p class='breadcrumbs'>
<span class='post-labels'>
<b:if cond='data:blog.pageName == ""'>
<a expr:href='data:blog.homepageUrl'>Home</a> » All posts
<b:else/>
<a expr:href='data:blog.homepageUrl'>Home</a> » Posts filed under <data:blog.pageName/>
</b:if>
</span>
</p>
</b:if>
</b:if>
</b:if>
</b:if>
</b:includable>
<b:includable id='main' var='top'>
Now Find ]]></b:skin> and replace it with the below code :
.breadcrumbs {
padding:5px 5px 5px 0px;
margin: 0px 0px 15px 0px;
font-size:95%;
line-height: 1.4em;
border-bottom:3px double #e6e4e3;
}
]]></b:skin>
Now you should have a working breadcrumb navigation on your system.

