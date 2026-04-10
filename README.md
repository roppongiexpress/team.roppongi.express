# team.roppongi.express

社会人自転車愛好家チーム Roppongi Express のウェブサイトです。

## 構成

| ディレクトリ | 内容 |
|---|---|
| `src/scss/` | SCSSソース |
| `src/icons/` | アイコンSVGソース |
| `docs/` | 配信用の静的サイト（GitHub Pages） |
| `old/roppongi.express/` | 旧 roppongi.express サイトのアーカイブ |

## 前提条件

- Docker

## ビルド

```bash
# SCSSコンパイル → docs/css/ に出力
make build

# Dockerイメージ削除
make clean
```

## 編集ガイド

| 変更内容 | 対象ファイル |
|---|---|
| HTML/テキスト修正 | `docs/index.html` を直接編集 |
| スタイル修正 | `src/scss/` を編集 → `make build` |
| 画像差し替え | `docs/images/` のファイルを差し替え |
| SNSアイコン変更 | FontForge でフォントのグリフを差し替え（後述） |

### SNSアイコンの変更手順

アイコンは `docs/fonts/rx_*` のカスタムフォントに埋め込まれています。

```bash
# FontForge をインストール（未導入の場合）
brew install fontforge

# FontForge のスクリプトでグリフを差し替え
# 例: U+F100 (X/Twitter), U+F101 (Facebook), U+F102 (Instagram),
#      U+F103 (RSS), U+F105 (Mail)
fontforge -lang=py -c "
import fontforge, psMat
font = fontforge.open('docs/fonts/rx_*.ttf')
font.selection.select(0xf100)   # 差し替えたいグリフ
font.clear()
g = font[0xf100]
g.importOutlines('src/icons/x.svg')
g.correctDirection()
g.width = 512
font.generate('docs/fonts/rx_*.ttf')
font.generate('docs/fonts/rx_*.woff')
font.generate('docs/fonts/rx_*.woff2')
font.generate('docs/fonts/rx_*.eot')
font.generate('docs/fonts/rx_*.svg')
font.close()
"
```

## URL

https://team.roppongi.express
