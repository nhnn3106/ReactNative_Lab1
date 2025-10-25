const { createRunOncePlugin, withAppBuildGradle } = require('@expo/config-plugins');

const withNoWebpIcons = (config) => {
  return withAppBuildGradle(config, (config) => {
    // Thêm cấu hình android.defaultConfig để chặn tạo WebP cho icon
    const buildGradle = config.modResults.contents;
    
    // Đoạn code Groovy để chèn vào defaultConfig
    const webpConfig = `
android {
    // ... các cấu hình khác
    defaultConfig {
        // ... các cấu hình khác
        // Bắt buộc Gradle không tạo các icon WebP
        generatedDensities = ['hdpi', 'mdpi', 'xhdpi', 'xxhdpi', 'xxxhdpi']
        // Tùy chọn: Dùng aaptOptions để loại trừ tệp WebP nếu chúng vẫn xuất hiện
        aaptOptions {
            noCompress 'webp'
        }
    }
}
`;

    // Tìm và thay thế hoặc chèn cấu hình này.
    // Cách an toàn nhất là chèn nó vào cuối file trước khối buildTypes hoặc trước cuối cùng
    const targetBlock = 'android {';
    if (buildGradle.includes(targetBlock)) {
      const newBlock = buildGradle.replace(
        targetBlock,
        targetBlock + `\n${webpConfig}`
      );
      config.modResults.contents = newBlock;
    } else {
        // Fallback nếu cấu trúc file thay đổi
        console.warn("Could not find 'android {' block in app/build.gradle. Manual fix may be needed.");
    }

    return config;
  });
};

module.exports = createRunOncePlugin(withNoWebpIcons, 'with-no-webp-icons', '1.0.0');