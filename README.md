# illustrator-scripts-collection

This project is a collection of scripts for Adobe Illustrator that are focused on common tasks that typically need to be done to prepare an illustration for a stock submission.

## Getting Started

### Installing scripts
Download all `*.jsx` scripts from the latest release and copy them to the `Scripts` in your Illustrator directory.

On macOS the Illustrator's `Scripts` directory is located at:
```
/Applications/Adobe Illustrator 2020/Presets.localized/en_US/Scripts/
```
On Windows at:
```
C:\Program Files\Adobe\Adobe Illustrator CS6 (64 Bit)\Presets\en_US\Scripts
```

### Scripts

#### Find Smaller Paths
The script searches for paths smaller then selected one. This is useful for illustrations that were traced or drawn manually since they might contain many tiny paths that increase size of the file and reduce Illustrator performance.

#### Find Overlay Paths
The script selects paths that are directly on top of each other by comparing their positions and sizes.

## Development

### Build scripts
Execute the following command to compile scripts into `jsx` format. They are going to be saved to `build` directory.
```
npm run build
```

### Run tests
```
npm install
npm test
```

### Run lint checks
```
npm run lint
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.