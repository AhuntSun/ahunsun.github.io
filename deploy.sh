#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#切换到dev分支
# git checkout dev

#将master分支合并到dev分支
# git merge master

# 将原项目推送到dev分支
git add -A

git commit -m 'update'

git push -f git@github.com:AhuntSun/ahunsun.github.io.git dev

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'ahuntsun.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:AhuntSun/ahunsun.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -