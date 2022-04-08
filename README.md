# kaimagnus.de
 Kai Magnus portfolio site development


## Installation

``gem install jekyll bundler`` to install jekyll

``bundle exec jekyll serve`` to start server

see https://jekyllrb.com/docs/


`` 
{% responsive_image
border: "true"
media: "image"
path: assets/img/wires-start.jpg
alt: ""
picture_class: "asdf"
caption: "" 
%}
``

remove variables like caption if not in use

## Show drafts and future posts 

``
bundle exec jekyll serve -l --force_polling -i --drafts --future
``

(Make changes to a file to trigger a reload)