"""Copy the static website into dist/ for a private Sites preview."""

from pathlib import Path
import shutil


def main():
    root = Path(__file__).resolve().parent
    output = root / "dist"
    if output.exists():
        shutil.rmtree(output)
    output.mkdir()

    for name in ("index.html", ".nojekyll", "assets", "images", "files",
                 "research", "publication", "teaching", "talks", "openings"):
        source = root / name
        destination = output / name
        # Git does not retain the optional files/ directory while it is empty.
        if name == "files" and not source.exists():
            continue
        if source.is_dir():
            shutil.copytree(source, destination, ignore=shutil.ignore_patterns(".DS_Store"))
        else:
            shutil.copy2(source, destination)

    print("Built six static pages in dist/.")


if __name__ == "__main__":
    main()
