run:
	vuepress dev docs
.PHONY: run

build:
	vuepress build docs
	cd docs/.vuepress; tar zcf ../../dist.tar.gz dist
	scp dist.tar.gz test245:/home/upload/cumulx/doc
.PHONY: build


