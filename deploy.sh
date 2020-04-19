set e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 绑定自定义域名
echo 'ahuntsun.top' > CNAME

git init
git config user.name "ahuntsun"
git config user.email "ahuntsun@163.com"
git add -A
git commit -m 'deploy-coding'

# git@ahuntsun:ahuntsun/vuepress_blog.git
git push -f master
cd -