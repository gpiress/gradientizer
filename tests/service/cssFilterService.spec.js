describe('CSS Filter Service', function() {

  beforeEach(module('gradientizr'));

  var CSSFilterService;

  beforeEach(inject(function(_CSSFilterService_) {
      CSSFilterService = _CSSFilterService_;
  }));

  describe('gradient', function() {
    it('should properly apply gradient filter', function() {
      const startColor = { color: '#ffffff', alpha: 0.3 },
            endColor   = { color: '#ff00ff', alpha: 0.7 },
            angle      = 'to top right';

      CSSFilterService.gradient(startColor, endColor, angle);
      const filter = CSSFilterService.getFilters();

      expect(filter['background']).toEqual('linear-gradient(to top right, rgba(255, 255, 255, 0.3), rgba(255, 0, 255, 0.7))');
    });
  });

  describe('hexToRgba', function() {
    it('should properly generate rgba from hex', function() {
      const hexColor = '#ffffff';
      const alpha = 0.6;

      const rgbaColor = CSSFilterService.hexToRgba(hexColor, alpha);

      expect(rgbaColor).toEqual('rgba(255, 255, 255, 0.6)');
    });

    it('should default alpha to 1 if not set', function() {
      const hexColor = '#ffffff';

      const rgbaColor = CSSFilterService.hexToRgba(hexColor);

      expect(rgbaColor).toEqual('rgba(255, 255, 255, 1)');
    });

    it('should return white if the input is not a valid color', function() {
      const input = 'whatever';
      const alpha = 0.8;

      const rgbaColor = CSSFilterService.hexToRgba(input, alpha);

      expect(rgbaColor).toEqual('rgba(255, 255, 255, 0.8)');
    });
  });

  describe('clearing filters', function() {
    it('should properly clear filters', function() {
      const startColor = { color: '#ffffff', alpha: 0.3 },
            endColor   = { color: '#ff00ff', alpha: 0.7 },
            angle      = 'to top right';

      CSSFilterService.gradient(startColor, endColor, angle);
      let filter = CSSFilterService.getFilters();

      expect(filter['background']).not.toEqual('');

      CSSFilterService.clear();
      filter = CSSFilterService.getFilters();

      expect(filter).toEqual({});
    });
  })
});
